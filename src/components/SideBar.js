import React from 'react'
import './styles/SideBar.css'
import { MenuList, MenuItem } from '@dhis2/ui-core'
import { AndroidSettingsIcon, ProgramsIcon, DataSetIcon, TestRunIcon } from './IconSvg'

const SideBar = () => {
    return (
        <aside className="uaa-filter-sidebar left-bar paper__two-panel__side-bar">
            <h1 className="uaa-app-header">  </h1> 
            {/* Usage Analytics test */}
            <MenuList>
                <MenuItem
                    icon={<AndroidSettingsIcon />}
                    label="Android"
                    onClick={function onClick(val) { alert("this is ".concat(val)) }}
                    value="android"
                />
                <MenuItem
                    icon={<ProgramsIcon />}
                    label="Programs"
                    onClick={function onClick(val) { alert("this is ".concat(val)) }}
                    value="programs"
                />
                <MenuItem
                    icon={<DataSetIcon />}
                    label="Data Sets"
                    onClick={function onClick(val) { alert("this is ".concat(val)) }}
                    value="dataSets"
                />
                <MenuItem
                    icon={<TestRunIcon />}
                    label="Test Android Login"
                    onClick={function onClick(val) { alert("this is ".concat(val)) }}
                    value="testAndroid"
                />
            </MenuList>
        </aside>
    )
}

export default SideBar