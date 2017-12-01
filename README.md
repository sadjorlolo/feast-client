[![Feast Logo](https://i.imgur.com/WYoH4Xf.png)](https://sadjorlolo.github.io/feast-client/)

# Feast

[Feast](https://sadjorlolo.github.io/feast-client/) is a full-stack web application created by me, Sarah Adjorlolo. Both the
[front-end repository](https://github.com/sadjorlolo/feast-client) and the [back-end repository](https://github.com/sadjorlolo/feast-api) are pinned to my [personal](https://github.com/sadjorlolo)
GitHub page.

The application can be found here: https://sadjorlolo.github.io/feast-client/.

The back-end is deployed here: https://secure-hamlet-26595.herokuapp.com/.

## About the Application

The purpose of this application is to allow a user to manage their personal
events and the attendees of their events.

When a user signs up, they have the typical authorizaton capabilities to sign
in, change password, and sign out. For this application, the user can also
create custom events, with date, time, location, and description attributes.

Once the event has been successfully created, the event creator has full CRUD
capabilities - they can view, update, and delete the event as they please.
Additionally, the event creator can invite other users to their events. As long
as the invited user exists within Feast and is not already listed as an attendee
for this specific event, they can be added. While an event creator cannot
delete an added attendee from an event, upon event deletion, all invitations to
attendees are subsequently deleted.

If a user has been invited to an event, they are able to see all received
invitations, view a single event to which they have been invited, and reject the
invitation. If a user rejects an invitation, they are removed from the list of
current attendees on the event creator's event.

## Development Process

Development of Feast began with the back-end Rails API set-up. I needed three
tables: Users, Events, and Invitees. Relationships were a bit tricky, as they
were bi-directional many-to-many. A User could have many events as an
event_creator, but a User could also have many events as an event_attendee,
through the Invitee join table.

After creating the tables and the custom relationships between the three, I tested
the relationships with curl scripts. This ensured records could be created,
viewed, updated, and deleted by a user, given specific constraints.

The front-end was created using the front-end framework Angular 2; and I used the
Angular authorization template created by Brian Distefano to get started.

I was able to set up each component, generating modules and services as needed
for my Invittes and Events resources. Multiple console.logs were used in the
development process to make sure I was both passing and receiving the
expected data. When I encountered a problem, as I often did, I would comment
out large sections of code step through the data flow process a piece at a time
until I could find the section that was breaking. If I could fix that, I would
repeat the process, slowly adding in commented-out code to test further steps in
the process.

## Technologies Used

- Angular 2 for application layout
- HTML
- CSS for custom design and formatting
- AJAX requests for interacting with the API
- Angular-CLI-GHPages for deploying to GitHub.

## Future Iterations

1) Add functonality to let event creator delete attendees from event.
2) Responsiveness.
3) When users enter attendee name, use fuzzy match to query all users.

## Wireframes and User Stories

![Feast Wireframes](https://i.imgur.com/vv9CSny.jpg)

#### User Stories

As a User, I want to …
- sign up for the application
- sign in to the application
- change my password when logged in
- log out of the Application
- create an event
- delete an event created by me
- view an event created by me
- update an event created by me
- invite users to my Events
- see all the events I have been invited to
- view an event I have been invited to
- remove myself from the attendance list for an event.

![Feast Screenshot](https://i.imgur.com/DmUDdbH.png)
