import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import {
    CreateGroup,
    CreateMember,
    EditProfile,
    Welcome,
    GroupDetails,
    GroupSearch,
    GroupSettings,
    Blah
} from "./../../containers";

const App = () => {
    return (
        <Fragment>
            <Route exact path="/app/:userId" component={Welcome} />
            <Route path="/app/:userId/create_group" component={CreateGroup} />
            <Route path="/app/:userId/create_member" component={CreateMember} />
            <Route path="/app/:userId/edit_profile" component={EditProfile} />
            <Route
                path="/app/:userId/group_details/:groupId"
                component={GroupDetails}
            />
            <Route
                path="/app/:userId/group_details/:groupId/search"
                component={GroupSearch}
            />
            <Route
                path="/app/:userId/group_details/:groupId/settings"
                component={GroupSettings}
            />
            <Route
                path="/app/:userId/group_details/:groupId/tabset"
                component={Blah}
            />
        </Fragment>
    );
};
export default App;
