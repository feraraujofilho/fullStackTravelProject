import { useLocation } from 'react-router-dom'

export default (): URLSearchParams => {
    const location = useLocation();
    const { search } = location;
    return new URLSearchParams(search);
}
