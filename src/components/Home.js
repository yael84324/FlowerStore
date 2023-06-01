import { React } from "react"
import { useNavigate } from 'react-router-dom'
import crocusImage from '../images/crocus-2139771.jpg';
import bouquet from '../images/bouquet-purpel.jpg';
import '../App.css'
import { Button } from "@material-ui/core";
export default function Home() {
    const navigate = useNavigate()

    function handleSubmit() {
        navigate('/products')

    }
    return <>
    <img src={crocusImage} alt="Crocus flower" className="home-img"/>
    <div className="nearby">
    <Button onClick={handleSubmit}>ראו הצצה קטנה 😉</Button>
    <img src={bouquet} alt="purpel bouquet" className="little-img"/>
    <div className="aboutUs">למה לשלוח פרחים שלנו?
<br/>
כי אצלנו זה הרבה יותר ממשלוח פרחים...
<br/>
הסיפור שלנו מתחיל ברגעים המאושרים שלכם,
<br/>
בדיוק ברגעים אלה אנו רוצים להיות שם בשבילכם.
<br/>
ההשראה שלנו מגיעה מתוך הצורך שלכם להעניק ולשמח את אלה שאתם אוהבים.
<br/>
מניפת הקולקציות המגוונות שלנו מרכזת מוצרי בוטיק
<br/>
החל מזרי פרחים הנשזרים בדיוק רב, עציצים וצמחי 
<br/>
נוי באיכות גבוהה, יינות מיקבים מובלים, שוקולד איכותי, 
<br/>
חבילות לידה מפנקות ומארזי ספא.
<br/>
כל שעליכם לעשות הוא רק לבחור.
<br/>
<br/>
</div></div>
    </>
   
}