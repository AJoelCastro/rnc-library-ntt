package com.rnclibraryntt

import android.content.res.Configuration
import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RncLibraryNttModule.NAME)
class RncLibraryNttModule(reactContext: ReactApplicationContext) :
  NativeRncLibraryNttSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getDeviceInfo(): WritableNativeMap {
    val map = WritableNativeMap()

    map.putString("deviceName", Build.DEVICE)
    map.putString("deviceModel", Build.MODEL)
    map.putString("systemVersion", Build.VERSION.RELEASE)
    map.putBoolean("isTablet", isTablet())

    return map
  }

  private fun isTablet(): Boolean {
    val configuration = reactApplicationContext.resources.configuration
    val screenLayout = configuration.screenLayout and Configuration.SCREENLAYOUT_SIZE_MASK

    return screenLayout >= Configuration.SCREENLAYOUT_SIZE_LARGE
  }
  companion object {
    const val NAME = "RncLibraryNtt"
  }
}
