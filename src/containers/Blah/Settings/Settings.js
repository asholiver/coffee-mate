import React, { Fragment } from "react";
import { Button, ButtonIconOnly, Select } from "./../../../components";

const Settings = ({
    data,
    members,
    deleteMember,
    addMember,
    users,
    deleteGroup
}) => {
    return (
        <Fragment>
            <Select
                label="Add member"
                name="new_member"
                options={users}
                onChange={addMember}
            />
            <p>Name: {data.name}</p>
            <p>Admin: {data.created_by}</p>
            {members != null ? (
                <Fragment>
                    <p> Members:</p>
                    <ol>
                        {members.map(member => (
                            <li key={member.user_id} className="h-display-flex">
                                <span>
                                    {member.first_name} {member.last_name}
                                </span>
                                <ButtonIconOnly
                                    buttonValue={member.user_id}
                                    buttonOnClick={deleteMember}
                                    icon="close"
                                    size="x-small"
                                    helpText="delete member"
                                />
                            </li>
                        ))}
                    </ol>
                </Fragment>
            ) : (
                <p>No Members</p>
            )}
            <Button
                type="submit"
                text="Delete"
                buttonStyle="primary"
                onClick={deleteGroup}
            />
        </Fragment>
    );
};

export default Settings;
