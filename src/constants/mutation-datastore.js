export const android_setting_mutation = {
    type: "create",
    resource: "dataStore/ANDROID_SETTINGS_APP2/android_settings",
    data: {
        prueba: "prueba"
    }
}

export const program_setting_mutation = {
    type: "create",
    resource: "dataStore/ANDROID_SETTINGS_APP2/program_settings",
    data: {}
}

export const dataset_setting_mutation = {
    type: "create",
    resource: "dataStore/ANDROID_SETTINGS_APP2/dataset_settings",
    data: {}
}

export const query_dataStore = {
    data: {
        resource: 'dataStore.json',
    },
}

// dataStore/ANDROID_SETTINGS_APP2/android_settings
/* {
    "data": {
        "resource": "datastore.json",
        "params": {
            "pageSize": 10
        }
    }
}

{
    "data": {
        "resource": "dataStore"
    }
} */