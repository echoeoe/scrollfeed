export function Permit({email, isEditor}) {

    const permitStyle = {
        backgroundColor: 'antiquewhite',
        border: '3px solid orange',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        color: 'black',
        padding: '7px',
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const buttonStyle = {
        backgroundColor: "grey" //default, viewer
    }

    return (
    <div style = {permitStyle}>
        <span className ="title">{email}</span>
        <button style={buttonStyle}>{isEditor}</button>
    </div>
    );
}