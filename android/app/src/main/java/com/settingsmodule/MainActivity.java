package com.settingsmodule;

import android.content.Context;
import android.os.Bundle;

import com.facebook.react.ReactActivity;

import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends ReactActivity {
    TimerTask mTimerTask;
    Timer mTimer;
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        mTimer = new Timer();
    }

    @Override
    public void onResume() {
        super.onResume();
        mTimerTask = new TimerTask () {
            private float mValue;
            public void run() {
                mValue += 3;
                MainActivity.this.getPreferences(Context.MODE_PRIVATE).edit()
                        .putFloat("nativePrefsKey", mValue).apply();
            }
        };
        mTimer.scheduleAtFixedRate(mTimerTask, 1000, 3000);
    }

    @Override
    public void onPause() {
        super.onPause();
        mTimerTask.cancel();
    }

    @Override
    protected String getMainComponentName() {
        return "SettingsModule";
    }
}
