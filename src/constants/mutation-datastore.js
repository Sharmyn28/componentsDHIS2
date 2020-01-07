export const android_setting_mutation = {
    create: { 
        type: "create",
        resource: "dataStore/ANDROID_SETTINGS_APP2/android_settings",
        data: {
            prueba: "prueba"
        }
    },
    update: {
        type: 'update',
        id: ({ id }) => id,
        //partial: true,
        resource: "dataStore/ANDROID_SETTINGS_APP2",
        data: ({ data }) => ({
            data,
        })
    },
    get: {
        data: {
            resource: "dataStore/ANDROID_SETTINGS_APP2/android_settings"
        }
    }
}

export const android_setting_update = {
    type: 'update',
    id: ({ id }) => id,
    //partial: true,
    resource: "dataStore/ANDROID_SETTINGS_APP2",
    data: ({ data }) => ({
        data,
    }) 
}

export const android_setting_get = {
    data: {
        resource: "dataStore/ANDROID_SETTINGS_APP2/android_settings"
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
        "resource": "dataStore/ANDROID_SETTINGS_APP2/android_settings"
    }
} 

{
    "data": {
        "resource": "dataStore/ANDROID_TEST/test_android.json"
    }
}

{
    "data": {
        "resource": "dataStore.json",
        "params": {
            "id": "ANDROID_TEST"
        }
    }
}

*/

// create namespace
/* {
    "type": "create",
    "resource": "dataStore/ANDROID_TEST/test_android",
    "data": {
        "prueba": "prueba"
    }
}

{
    "type": "update",
    "id": "test_android",
    "resource": "dataStore/ANDROID_TEST",
    "data": {
        "prueba2": "prueba2"
    }
} */