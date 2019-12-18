import AndroidSetting from '../pages/android-settings/AndroidSetting'
import ProgramSetting from '../pages/program-settings/ProgramSetting'
import DataSetSetting from '../pages/dataset-settings/DataSetSetting'
import TestAndroid from '../pages/test-android/TestAndroid'
import { AndroidSettingsIcon, ProgramsIcon, DataSetIcon, TestRunIcon } from '../components/IconSvg';

const MenuSection = [
    {
        key: "android-setting",
        icon: AndroidSettingsIcon,
        label: "Android",
        value: "android",
        path: "/android-setting",
        render: AndroidSetting
    },
    {
        key: "program-setting",
        icon: ProgramsIcon,
        label: "Programs",
        value: "programs",
        path: "/program-setting",
        render: ProgramSetting
    },
    {
        key: "dataset-setting",
        icon: DataSetIcon,
        label: "Data Sets",
        value: "dataSets",
        path: "/dataset-setting",
        render: DataSetSetting
    },
    {
        key: "test-android-login",
        icon: TestRunIcon,
        label: "Test Android Login",
        value: "testAndroid",
        path: "/test-android-login",
        render: TestAndroid
    }
]

export default MenuSection