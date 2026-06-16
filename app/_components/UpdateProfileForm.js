"use client"
import Image from "next/image";
import { updateProfile } from "../_lib/actions";

import Button from "./FormButton";

export default function UpdateProfileForm({ guest,children }) {
  const {fullName,email,nationality,nationalID,countryFlag}=guest
  return (
          <form action={updateProfile} className="max-w-2xl mx-auto bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Full name</label>
          <input
            name="fullName"
            defaultValue={fullName}
            disabled
            className="px-3 py-1 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
          name="email"
            defaultValue={email}
            disabled
            className="px-3 py-1 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <Image
              src={countryFlag}
              alt="Country flag"
              className="rounded-sm"
              height={32}
              width={32}
            />
          </div>
            {children}


        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            defaultValue={nationalID}
            className="px-3 py-1 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6" label="Updating...">
          <Button label="updating">Update profile</Button>
        </div>
      </form>
  )
}


