import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { SPACINGS } from "../../theme/sizes";
import { useColorMode } from "../../hooks/useColorMode";
import UIView from "./UIView";
import UIFilterChip from "./UIFilterChip";

interface TUIBottomSheetProps {
  snapPoints?: (string | number)[];
  bottomSheetStyle?: ViewStyle;
  children: JSX.Element;
}

const UIBottomSheet = React.forwardRef<BottomSheetModal, TUIBottomSheetProps>(
  ({ snapPoints, bottomSheetStyle, children }, modalRef) => {
    const activeMode = useColorMode();

    const defaultSnapPoints = useMemo(() => ["50%"], []);

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={modalRef}
          index={0}
          style={[styles.bottomSheetWrapperStyle, bottomSheetStyle]}
          snapPoints={snapPoints ?? defaultSnapPoints}
          backgroundStyle={{ backgroundColor: activeMode.backgroundColor }}
          backdropComponent={(backdropProps) => (
            <BottomSheetBackdrop
              {...backdropProps}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              opacity={0.7}
            />
          )}
          enablePanDownToClose
        >
          <>{children}</>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  }
);

export default UIBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetWrapperStyle: {
    borderRadius: 30,
    paddingVertical: SPACINGS.L,
  },
});
