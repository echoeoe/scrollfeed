export function Permit({email, isEditor}) {

    const permitStyle = {
        backgroundColor: 'antiquewhite',
        border: '3px solid orange',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        color: 'black'
    };

    return (
    <div style = {permitStyle}>
        <span>
            <p className ="title">{email}</p>
            <button>{isEditor}</button>
        </span>
    </div>
    );
}