

type Props = {
    name: string;

}

export function CardEvent({name}: Props) {
    return(
        <div>
            {name}
        </div>
    );
}