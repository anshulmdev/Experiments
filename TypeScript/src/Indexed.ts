interface ContactEvents {
    deleted: String;
    statusChanged: Boolean;
}

const getValue = <T U extends keyof T>(objectExample: T, propertyName: U) => {
    return objectExample[propertyName];
}

const handleEvent = <T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void 
) => {

}

handleEvent("statusChanged", evt => evt)