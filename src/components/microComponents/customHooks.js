import { useEffect, useState } from "react";
import {DEFAULT_PAGE_TITLE} from "../../constants/strings";

const SetNewDocTitle = title => {
    const [newDocTitle, setNewDocTitle] = useState(title);
    useEffect(() => {
        document.title = newDocTitle + ' - ' + DEFAULT_PAGE_TITLE;  }, [newDocTitle]);
    return [newDocTitle, setNewDocTitle];
};

export {SetNewDocTitle};