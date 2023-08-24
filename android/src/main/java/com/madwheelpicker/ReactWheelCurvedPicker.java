package com.madwheelpicker;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.Shader;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.nativewheelpicker.NativeWheelPicker;

import java.util.List;

public class ReactWheelCurvedPicker extends NativeWheelPicker {
  private List<Integer> mValueData;

  public ReactWheelCurvedPicker(ReactContext reactContext) {
    super(reactContext);
    setOnWheelChangeListener(new OnWheelChangeListener() {
      @Override
      public void onWheelScrolling(float deltaX, float deltaY) {

      }

      private void dispatchOnValueChangeEvent(int index) {
        EventDispatcher mEventDispatcher = UIManagerHelper.getEventDispatcherForReactTag(reactContext, getId());
        mEventDispatcher.dispatchEvent(new ItemSelectedEvent(getId(), index));
      }

      @Override
      public void onWheelSelected(int index, String data) {
        if (mValueData != null && index < mValueData.size()) {
          dispatchOnValueChangeEvent(mValueData.get(index));
        }
      }

      @Override
      public void onWheelScrollStateChanged(int state) {

      }
    });
  }

  @Override
  protected void drawForeground(Canvas canvas) {
    super.drawForeground(canvas);

    Paint paint = new Paint();
    paint.setColor(Color.WHITE);
    int colorFrom = Color.TRANSPARENT;
    int colorTo = Color.TRANSPARENT;
    LinearGradient linearGradientShader = new LinearGradient(rectCurItem.left, rectCurItem.top, rectCurItem.right / 2, rectCurItem.top, colorFrom, colorTo, Shader.TileMode.MIRROR);
    paint.setShader(linearGradientShader);
    canvas.drawLine(rectCurItem.left, rectCurItem.top, rectCurItem.right, rectCurItem.top, paint);
    canvas.drawLine(rectCurItem.left, rectCurItem.bottom, rectCurItem.right, rectCurItem.bottom, paint);
  }

  @Override
  public void setItemIndex(int index) {
    super.setItemIndex(index);
    unitDeltaTotal = 0;
    mHandler.post(this);
  }

  public void setValueData(List<Integer> data) {
    mValueData = data;
  }

  public int getState() {
    return state;
  }
}

class ItemSelectedEvent extends Event<ItemSelectedEvent> {
  public static final String EVENT_NAME = "wheelCurvedPickerPageSelected";
  private final int data;

  protected ItemSelectedEvent(int viewTag, int value) {
    super(viewTag);
    data = value;
  }

  @Override
  public String getEventName() {
    return EVENT_NAME;
  }

  @Override
  public void dispatch(RCTEventEmitter rctEventEmitter) {
    super.dispatch(rctEventEmitter);
  }

  @Override
  protected WritableMap getEventData() {
    WritableMap eventData = Arguments.createMap();
    eventData.putInt("data", data);
    return eventData;
  }
}
