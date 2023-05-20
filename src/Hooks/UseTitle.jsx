import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(() => {
        document.title = `Fairy Tales | ${title}`;
    }, [title])
};

export default useTitle;