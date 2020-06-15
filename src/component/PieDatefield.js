import React from 'react';
import {TextField} from 'react-admin';
export const PieDatefield = ({ record = {}, source, label }) => {

    const dateTimeObj = new Date(record[source].seconds * 1000)
    const dateTimeStr = dateTimeObj.getDate() + "/" + (dateTimeObj.getMonth() + 1) + "/" + dateTimeObj.getFullYear() + " " + dateTimeObj.getHours() + ":" + dateTimeObj.getMinutes() + ":" + dateTimeObj.getSeconds()
    return <span>
        {dateTimeStr}
    </span>
}
export const PieStatusField = ({record = {}, source}) => {

    // const statusFlag = record[source]
    console.log("Status Flag ")
    const statusFlag = record[source]
    if ("1" === statusFlag) {
        record[source] = "Active"
    } else if ("0" === statusFlag) {
        record[source] = "Disabled"
    }
    return null
}