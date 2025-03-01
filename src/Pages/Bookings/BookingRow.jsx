

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { customerName, email, date, service, price, img,_id, status } = booking;

   
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="rounded h-12 w-12">
                                {img && <img
                                    src={img}
                                    alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {service}

                </td>
                <td>{email}</td>
                <td>{price}</td>
                <th>
                   { 
                    status === 'confirm'?<span className="font-bold text-primary">Confirmed</span>:
                    <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs"> Please confirm</button>}
                </th>
            </tr>
        </tbody>
    );
};

export default BookingRow;