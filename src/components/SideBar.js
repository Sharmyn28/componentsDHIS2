import React from 'react'
import './styles/SideBar.css'
import { MenuList, MenuItem } from '@dhis2/ui-core'
import { AndroidSettingsIcon, ProgramsIcon, DataSetIcon, TestRunIcon } from './IconSvg'
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
      <div className="col-sm-2 uaa-filter-sidebar">
        <h1 className="uaa-app-header"> </h1>
        {/* Usage Analytics test */}
        <MenuList>
          <MenuItem
            icon={<AndroidSettingsIcon />}
            label="Android"
            value="android"
            href="/android-setting"
          />
          <MenuItem
            icon={<ProgramsIcon />}
            label="Programs"
            href="/program-setting"
            value="programs"
          />
          <MenuItem
            icon={<DataSetIcon />}
            label="Data Sets"
            href="/dataset-setting"
            value="dataSets"
          />
          <MenuItem
            icon={<TestRunIcon />}
            label="Test Android Login"
            value="testAndroid"
            href="/test-android-login"
          />
        </MenuList>
      </div>
    );
}

export default SideBar

{/*
  onClick={function onClick(val) {
              alert("this is ".concat(val));
            }}
Grid item xs={4}
 <aside className="uaa-filter-sidebar left-bar paper__two-panel__side-bar">
            <h1 className="uaa-app-header">  </h1> 
            
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
        </aside> */}