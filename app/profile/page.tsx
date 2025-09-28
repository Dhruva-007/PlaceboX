"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Button } from "../../components/ui/button"

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Your display name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="wallet">Wallet / Account</Label>
            <Input id="wallet" placeholder="steve.onchain" />
          </div>
          <div>
            <Button className="bg-brand-gradient text-black hover:opacity-90">Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
