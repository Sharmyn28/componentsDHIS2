import React, { Fragment } from 'react'
import './styles/SideBar.css'


const SideBar = () => {
    return (
        <aside className="uaa-filter-sidebar left-bar paper__two-panel__side-bar">
            <h1 className="uaa-app-header"> Usage Analytics test </h1>
            {/* <Fields.CategoryDropDown /> */}
            {/* {showDateFields && (
                <Fragment>
                    <h3> Filtro menu 1 </h3>
                </Fragment>
            )}
            {showFavoriteViewsFields && (
                <Fragment>
                    <h3> Filtro menu 2 </h3>
                </Fragment>
            )}
            {showTopFavoritesFields && (
                <Fragment>
                    <h3> Filtro menu 3 </h3>
                </Fragment>
            )} */}
            <Fragment>
                <h3> Filtro menu 1 </h3>
            </Fragment>
            <Fragment>
                <h3> Filtro menu 2 </h3>
            </Fragment>
            <Fragment>
                <h3> Filtro menu 3 </h3>
            </Fragment>
        </aside>
    )
}

export default SideBar