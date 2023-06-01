package com.tencent.weauth.ui

import android.graphics.Color
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.tencent.luggage.wxa.SaaA.api.SaaAApi
import com.tencent.luggage.wxaapi.LaunchWxaAppResult
import com.tencent.luggage.wxa.SaaA.api.LaunchAppModuleResultListener
import com.tencent.mm.sdk.platformtools.Log
import com.tencent.weauth.BuildConfig
import com.tencent.weauth.R

class MainActivity : AppCompatActivity() {
    private companion object {
        private const val TAG = "Demo.MainActivity"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (BuildConfig.SPLASHSCREEN) {
            window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LAYOUT_STABLE or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            window.statusBarColor = Color.TRANSPARENT
            setTheme(R.style.Theme_Splashscreen)
            setContentView(R.layout.layout_splashscreen)
            window.decorView.post {
                launchAppModule()    
            }
        } else {
            setTheme(R.style.Theme_App_Global)
            setContentView(R.layout.layout)
            launchAppModule()
        }
    }

    private fun launchAppModule() {
        // 启动示例
        try {
            val saaAApiImpl = SaaAApi.Factory.getApi()
            saaAApiImpl.launchAppModule(this, "wxa356535f4d0d7f40", "",
            LaunchAppModuleResultListener {  miniModuleId, timestamp, result ->
                android.util.Log.e("LaunchAppModuleResult", "$result")
                if (result == LaunchWxaAppResult.OK) {
                    runOnUiThread {
                        finish()
                    }
                }
            })
        }  catch (e: NullPointerException) {
            Log.printErrStackTrace(TAG, e, "");
        }
    }
}
