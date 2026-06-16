"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth, signIn, signOut } from "./auth"
import { createBooking, deleteBooking, getBookings, updateBooking, updateGuest } from "./data-service";

export async function updateProfile(formData) {
    const session= await auth()
    if(!session) throw new Error("You must be logged in");

    const nationalID=formData.get("nationalID")
    const [nationality,countryFlag]=formData.get("nationality").split("%")
    if(!/^[A-Za-z0-9]{6,12}$/.test(nationalID)) throw new Error("Please provide a valid national ID")

    const updateData={nationalID,nationality,countryFlag}
    updateGuest(session.user.guestId,updateData)

    revalidatePath("/account/profile")
    
}

export async function createReservation(bookingData,formData) {
    
    
    const numGuests=formData.get("numGuests")
    const observations=formData.get("observations")
    const session= await auth();
    if(!session) throw new Error("You must be logged in");

    const newData={
        ...bookingData,numGuests,observations:observations.slice(0,1000),guestId:session.user.guestId,extrasPrice:bookingData.roomPrice,totalPrice:0,isPaid:false,hasBreakfast:false,status:"unconfirmed"
    }
    await createBooking(newData)
    revalidatePath("/account/reservations");
    revalidatePath(`/rooms/${bookingData.roomId}`)
    redirect("/rooms/thankyou")

}
export async function deleteReservation(id) {
    const session= await auth();
    if(!session) throw new Error("You must be logged in");
    const guestBookings= await getBookings(session.user.guestId);
    const guestBookingIds=guestBookings.map(booking=>booking.id);
    if(!guestBookingIds.includes(id)) throw new Error("Your are not allowed to delete this booking");
    await deleteBooking(id);
    revalidatePath("/account/reservations");
}

export async function updateDataReservation(formData) {
    const numGuests=formData.get("numGuests")
    const observations=formData.get("observations")
    const id=formData.get("id")
    const session = await auth();
    if(!session) throw new Error("You must be logged in");
    const guestBookings=await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map(booking=>booking.id)
    
    if(!guestBookingIds.includes(Number(id))) throw new Error("Your are not allowed to edit this booking");
    await updateBooking(id,{numGuests:Number(numGuests),observations:observations.slice(0,1000)})

    revalidatePath(`/account/reservations/edit/${id}`);
    revalidatePath("/account/reservations");
    
    redirect("/account/reservations/")
}
export async function signInAction() {
    await signIn("google",{redirectTo:"/account"})
}

export async function signOutAction() {
    await signOut({redirectTo:"/"})
}