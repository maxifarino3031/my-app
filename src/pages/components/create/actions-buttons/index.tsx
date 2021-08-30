import { Button, Col, Row } from 'react-bootstrap';
import './styles.css';

export const ActionsButtons = () => {

    return (
        
        <div>            
                <Button className='btnClear' variant="primary" type="reset">
                    Clear
                </Button>
            
                <Button className='btnSave' variant="primary" type="submit">
                    Save
                </Button>            
        </div>        
    )

}