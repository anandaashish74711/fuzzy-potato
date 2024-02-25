import { useOrganization } from "@clerk/nextjs";

export const List = () => {
    const { memberships } = useOrganization({
        memberships: {
            infinite: true,
        }
    });

if(!userMembership.data?.length)return null

    return (
        <div>
            {/* Render your component content here */}
        </div>
    );
};
