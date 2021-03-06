import React, { useMemo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { RADIUS, SPACINGS } from '../../theme/sizes';
import { useColorMode } from '../../hooks/useColorMode';

interface TUIBottomSheetProps {
  snapPoints?: (string | number)[];
  bottomSheetStyle?: ViewStyle;
  children: JSX.Element;
}

const UIBottomSheet = React.forwardRef<BottomSheetModal, TUIBottomSheetProps>(
  ({ snapPoints, bottomSheetStyle, children }, modalRef) => {
    const activeMode = useColorMode();

    const defaultSnapPoints = useMemo(() => ['50%'], []);

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
        >
          {children}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

export default UIBottomSheet;

UIBottomSheet.displayName = 'UIBottomSheet';

const styles = StyleSheet.create({
  bottomSheetWrapperStyle: {
    borderRadius: RADIUS.XL,
    paddingVertical: SPACINGS.L,
  },
});
