package com.nativewheelpicker;

import java.util.List;

public interface IWheelPicker {
  void setData(List<String> data);

  void setOnWheelChangeListener(AbstractWheelPicker.OnWheelChangeListener listener);

  void setItemIndex(int index);

  void setItemSpace(int space);

  void setItemCount(int count);

  void setTextColor(int color);

  void setTextSize(int size);

  void clearCache();

  void setCurrentTextColor(int color);

  void setWheelDecor(boolean ignorePadding, AbstractWheelDecor decor);
}
