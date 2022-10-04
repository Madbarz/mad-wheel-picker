package com.nativewheelpicker;

import android.content.Context;
import android.view.animation.Interpolator;
import android.widget.Scroller;

class ScrollerCompat implements WheelScroller {
  private final Scroller mScroller;

  ScrollerCompat(Context context) {
    mScroller = new Scroller(context);
  }

  ScrollerCompat(Context context, Interpolator interpolator) {
    mScroller = new Scroller(context, interpolator);
  }

  ScrollerCompat(Context context, Interpolator interpolator, boolean flywheel) {
    mScroller = new Scroller(context, interpolator, flywheel);
  }

  @Override
  public void abortAnimation() {
    mScroller.abortAnimation();
  }

  @Override
  public boolean computeScrollOffset() {
    return mScroller.computeScrollOffset();
  }

  @Override
  public void extendDuration(int extend) {
    mScroller.extendDuration(extend);
  }

  @Override
  public void fling(int startX, int startY, int velocityX, int velocityY, int minX, int maxX, int minY, int maxY) {
    mScroller.fling(startX, startY, velocityX, velocityY, minX, maxX, minY, maxY);
  }

  @Override
  public void fling(int startX, int startY, int velocityX, int velocityY, int minX, int maxX, int minY, int maxY, int overX, int overY) {
    mScroller.fling(startX, startY, velocityX, velocityY, minX, maxX, minY, maxY);
  }

  @Override
  public void forceFinished(boolean finished) {
    mScroller.forceFinished(finished);
  }

  @Override
  public float getCurrVelocity() {
    return mScroller.getCurrVelocity();
  }

  @Override
  public int getCurrX() {
    return mScroller.getCurrX();
  }

  @Override
  public int getCurrY() {
    return mScroller.getCurrY();
  }

  @Override
  public int getDuration() {
    return mScroller.getDuration();
  }

  @Override
  public int getFinalX() {
    return mScroller.getFinalX();
  }

  @Override
  public int getFinalY() {
    return mScroller.getFinalY();
  }

  @Override
  public int getStartX() {
    return mScroller.getStartX();
  }

  @Override
  public int getStartY() {
    return mScroller.getStartY();
  }

  @Override
  public boolean isFinished() {
    return mScroller.isFinished();
  }

  @Override
  public void setFinalX(int newX) {
    mScroller.setFinalX(newX);
  }

  @Override
  public void setFinalY(int newY) {
    mScroller.setFinalY(newY);
  }

  @Override
  public boolean isOverScrolled() {
    throw new RuntimeException("ScrollerCompat not support this method.");
  }

  @Override
  public void notifyHorizontalEdgeReached(int startX, int finalX, int overX) {
    throw new RuntimeException("ScrollerCompat not support this method.");
  }

  @Override
  public void notifyVerticalEdgeReached(int startY, int finalY, int overY) {
    throw new RuntimeException("ScrollerCompat not support this method.");
  }

  @Override
  public void setFriction(float friction) {
    mScroller.setFriction(friction);
  }

  @Override
  public boolean springBack(int startX, int startY, int minX, int maxX, int minY, int maxY) {
    throw new RuntimeException("ScrollerCompat not support this method.");
  }

  @Override
  public void startScroll(int startX, int startY, int dx, int dy) {
    mScroller.startScroll(startX, startY, dx, dy);
  }

  @Override
  public void startScroll(int startX, int startY, int dx, int dy, int duration) {
    mScroller.startScroll(startX, startY, dx, dy, duration);
  }

  @Override
  public int timePassed() {
    return mScroller.timePassed();
  }
}
