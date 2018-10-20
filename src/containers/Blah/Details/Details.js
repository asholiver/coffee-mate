import React, { Fragment } from "react";
import { GroupMember } from "./../../../components";

const GroupDetails = ({ names, groupName, complete }) => {
    return (
        <Fragment>
            <p className="c-paragraph">{groupName}</p>
            <p className="c-paragraph">Its your round</p>
            {names != null ? (
                <ol className="c-group-link-container">
                    {names.map((e, index) => (
                        <GroupMember
                            name={`${e.first_name} ${e.last_name}`}
                            handleComplete={complete}
                            id={e.user_id}
                            isActive={index === 0}
                            key={index}
                        />
                    ))}
                </ol>
            ) : (
                <p>There are no members in this group</p>
            )}
        </Fragment>
    );
};

export default GroupDetails;
