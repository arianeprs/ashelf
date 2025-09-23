export default function AddBookButton({buttonColor}:{buttonColor:string}) {    
    return (
        <button className={`self-end w-fit p-3 cursor-pointer rounded-md ${buttonColor}`}>Add book</button>
    )
}