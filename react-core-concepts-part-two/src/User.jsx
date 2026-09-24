export default function User({user}) {

    const {title, body, id} = user;

    return (
        <div className="box">
            <h3>{id}</h3>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    )
}