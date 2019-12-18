import React from 'react'
import './styles/SideBar.css'
import { MenuList, MenuItem } from '@dhis2/ui-core'
import { AndroidSettingsIcon, ProgramsIcon, DataSetIcon, TestRunIcon } from './IconSvg'
import MenuSection from '../constants/menu-sections'
import { Link } from "react-router-dom";
import linkStyles from '../components/styles/link.module.css'
import sideBarStyles from '../components/styles/sideBar.module.css';

const SideBar = () => {
    return (
      <div className={`col-sm-2 ${sideBarStyles.sidebar}`}>
        <h1 className={sideBarStyles.sidebar_header}> </h1>
        {/* Usage Analytics test   href="/android-setting"*/}
        <MenuList>
          {/* <Link to="/android-setting" className={linkStyles.link}> 
            <MenuItem
              icon={<AndroidSettingsIcon />}
              label="Android"
              value="android"
            /> 
          </Link>
          <Link to="/program-setting" className={linkStyles.link}>
            <MenuItem
              icon={<ProgramsIcon />}
              label="Programs" 
              value="programs"
            />
          </Link>
          <Link to="/dataset-setting" className={linkStyles.link}>
            <MenuItem
              icon={<DataSetIcon />}
              label="Data Sets"
              value="dataSets"
            />
          </Link>
          <Link to="/test-android-login" className={linkStyles.link}>
            <MenuItem
              icon={<TestRunIcon />}
              label="Test Android Login"
              value="testAndroid"
            />
          </Link> */}
          
            {MenuSection.map(section => {
              {/* const IconRender = () => {
                const Icon = section.icon
                return <Icon />
              } */}

              return (
                <Link
                  key={section.key}
                  to={section.path}
                  className={linkStyles.link}>
                  <MenuItem
                    icon={<section.icon />}
                    label={section.label}
                    value={section.value}
                  />
                </Link>
              )
            })}
          
        </MenuList>
      </div>
    );
}

export default SideBar