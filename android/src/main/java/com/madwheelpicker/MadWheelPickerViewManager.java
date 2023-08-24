package com.madwheelpicker;

import android.graphics.Color;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.nativewheelpicker.AbstractWheelPicker;

import java.util.ArrayList;
import java.util.Map;

@ReactModule(name = MadWheelPickerViewManager.NAME)
public class MadWheelPickerViewManager extends MadWheelPickerViewManagerSpec<ReactWheelCurvedPicker> {

  public static final String NAME = "MadWheelPickerView";

  @Override
  public String getName() {
    return NAME;
  }

  private static final int DEFAULT_TEXT_SIZE = 25;
  private static final int DEFAULT_ITEM_SPACE = 28;

  @NonNull
  @Override
  protected ReactWheelCurvedPicker createViewInstance(ThemedReactContext themedReactContext) {
    ReactWheelCurvedPicker picker = new ReactWheelCurvedPicker(themedReactContext);
    picker.setTextColor(Color.LTGRAY);
    picker.setCurrentTextColor(Color.BLACK);
    picker.setTextSize(DEFAULT_TEXT_SIZE);
    picker.setItemSpace(DEFAULT_ITEM_SPACE);

    return picker;
  }

  @Override
  public Map getExportedCustomDirectEventTypeConstants() {
    Map<String, Object> export = super.getExportedCustomDirectEventTypeConstants();
    if (export == null) {
      export = MapBuilder.newHashMap();
    }
    export.put(ItemSelectedEvent.EVENT_NAME, MapBuilder.of("registrationName", "onValueChange"));

    return export;
  }

  @Override
  @ReactProp(name = "data")
  public void setData(ReactWheelCurvedPicker picker, ReadableArray items) {
    if (picker == null) {
      return;
    }

    ArrayList<Integer> valueData = new ArrayList<>();
    ArrayList<String> labelData = new ArrayList<>();
    for (int i = 0; i < items.size(); i++) {
      ReadableMap itemMap = items.getMap(i);
      valueData.add(itemMap.getInt("value"));
      labelData.add(itemMap.getString("label"));
    }
    picker.setValueData(valueData);
    picker.setData(labelData);
  }

  @Override
  @ReactProp(name = "selectedIndex")
  public void setSelectedIndex(ReactWheelCurvedPicker view, int index) {
    if (view != null && view.getState() == AbstractWheelPicker.SCROLL_STATE_IDLE) {
      view.setItemIndex(index);
      view.invalidate();
    }
  }

  @Override
  @ReactProp(name = "textColor")
  public void setTextColor(ReactWheelCurvedPicker view, String color) {
    if (view != null) {
      int newColor = Color.parseColor(color);
      view.setTextColor(newColor);
    }
  }

  @Override
  @ReactProp(name = "selectedTextColor")
  public void setSelectedTextColor(ReactWheelCurvedPicker view, String color) {
    if (view != null) {
      int newColor = Color.parseColor(color);
      view.setCurrentTextColor(newColor);
    }
  }

  @Override
  @ReactProp(name = "textSize")
  public void setTextSize(ReactWheelCurvedPicker view, int size) {
    if (view != null) {
      view.setTextSize((int) PixelUtil.toPixelFromDIP(size));
    }
  }

  @Override
  @ReactProp(name = "itemSpace")
  public void setItemSpace(ReactWheelCurvedPicker view, int space) {
    if (view != null) {
      view.setItemSpace((int) PixelUtil.toPixelFromDIP(space));
    }
  }
}
