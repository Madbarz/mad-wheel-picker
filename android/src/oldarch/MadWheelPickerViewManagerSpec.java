package com.madwheelpicker;

import android.view.View;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;

public abstract class MadWheelPickerViewManagerSpec<T extends ReactWheelCurvedPicker> extends SimpleViewManager<T> {
  public abstract void setData(T view, ReadableArray items);
  public abstract void setSelectedIndex(T view, int index);
  public abstract void setTextColor(T view, String color);
  public abstract void setSelectedTextColor(T view, String color);
  public abstract void setTextSize(T view, int size);
  public abstract void setItemSpace(T view, int space);
}
