package com.madwheelpicker;

import android.view.View;

import androidx.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.viewmanagers.MadWheelPickerViewManagerDelegate;
import com.facebook.react.viewmanagers.MadWheelPickerViewManagerInterface;
import com.facebook.soloader.SoLoader;

public abstract class MadWheelPickerViewManagerSpec<T extends ReactWheelCurvedPicker> extends SimpleViewManager<T> implements MadWheelPickerViewManagerInterface<T> {
  static {
    if (BuildConfig.CODEGEN_MODULE_REGISTRATION != null) {
      SoLoader.loadLibrary(BuildConfig.CODEGEN_MODULE_REGISTRATION);
    }
  }

  private final ViewManagerDelegate<T> mDelegate;

  public MadWheelPickerViewManagerSpec() {
    mDelegate = new MadWheelPickerViewManagerDelegate(this);
  }

  @Nullable
  @Override
  protected ViewManagerDelegate<T> getDelegate() {
    return mDelegate;
  }
}
