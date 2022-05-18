export default function NameList() {
    const names = ["Bruce", "Clark", "Diana"]

    return (
        <ul>
            {names.map((name) => <li key={name}>{name}</li>)}
        </ul>
    )
}
