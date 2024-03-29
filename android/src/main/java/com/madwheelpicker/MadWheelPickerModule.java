package com.madwheelpicker;

import android.graphics.Color;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.nativewheelpicker.AbstractWheelPicker;

import java.util.ArrayList;
import java.util.Map;

@ReactModule(name = MadWheelPickerModule.NAME)
public class MadWheelPickerModule extends SimpleViewManager<ReactWheelCurvedPicker> {
    public static final String NAME = "MadWheelPicker";
    private static final int DEFAULT_TEXT_SIZE = 25 * 2;
    private static final int DEFAULT_ITEM_SPACE = 14 * 2;


    @Override
    protected ReactWheelCurvedPicker createViewInstance(ThemedReactContext reactContext){
      ReactWheelCurvedPicker picker = new ReactWheelCurvedPicker(reactContext);
      picker.setTextColor(Color.LTGRAY);
      picker.setCurrentTextColor(Color.BLACK);
      picker.setTextSize(DEFAULT_TEXT_SIZE);
      picker.setItemSpace(DEFAULT_ITEM_SPACE);

      return picker;
    }

  @Override
    public Map getExportedCustomDirectEventTypeConstants(){
      return MapBuilder.of(ItemSelectedEvent.EVENT_NAME, MapBuilder.of("registrationName", "onValueChange"));
    }

    @ReactProp(name="data")
    public void setData(ReactWheelCurvedPicker picker, ReadableArray items){
      if(picker == null){
        return;
      }

      ArrayList<Integer> valueData = new ArrayList<>();
      ArrayList<String> labelData = new ArrayList<>();
      for(int i = 0; i < items.size(); i++){
        ReadableMap itemMap =  items.getMap(i);
        valueData.add(itemMap.getInt("value"));
        labelData.add(itemMap.getString("label"));
      }
      picker.setValueData(valueData);
      picker.setData(labelData);
    }

    @ReactProp(name="selectedIndex")
    public void setSelectedIndex(ReactWheelCurvedPicker picker, int index){
      if(picker != null && picker.getState() == AbstractWheelPicker.SCROLL_STATE_IDLE){
        picker.setItemIndex(index);
        picker.invalidate();
      }
    }

    @ReactProp(name="textColor")
    public void setTextColor(ReactWheelCurvedPicker picker, String color) {
      if (picker != null) {
        int newColor = Color.parseColor(color);
        picker.setTextColor(newColor);
      }
    }

    @ReactProp(name="selectedTextColor")
    public void setSelectedTextColor(ReactWheelCurvedPicker picker, String color){
      if(picker != null){
        int newColor = Color.parseColor(color);
        picker.setCurrentTextColor(newColor);
      }
    }

    @ReactProp(name="textSize")
    public void setTextSize(ReactWheelCurvedPicker picker, int size) {
      if (picker != null) {
        picker.setTextSize((int) PixelUtil.toPixelFromDIP(size));
      }
    }

    @ReactProp(name="itemSpace")
    public void setItemSpace(ReactWheelCurvedPicker picker, int space) {
      if (picker != null) {
        picker.setItemSpace((int) PixelUtil.toPixelFromDIP(space));
      }
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }
}
