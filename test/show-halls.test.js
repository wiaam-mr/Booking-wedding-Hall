// test/show-halls.test.js

function hallsExist(hallsData) {
    return hallsData.length > 0;
}

function getNoHallsMessage(hallsData) {
    if (hallsData.length === 0) {
        return "No halls found";
    }
    return "";
}

function getHallDetails(hall) {
    return {
        location: hall.location,
        price: hall.price,
        maxGuests: hall.maxGuests
    };
}

test('should show "No halls found" when no halls available', () => {
    const emptyHalls = [];
    const result = getNoHallsMessage(emptyHalls);
    expect(result).toBe("No halls found");
});

test('should return true when halls exist', () => {
    const hallsWithData = [{ name: "Al-Ourda" }];
    const result = hallsExist(hallsWithData);
    expect(result).toBe(true);
});

test('should return correct details when clicking View Details', () => {
    const sampleHall = {
        name: "Al-Ourda",
        location: "Damascus - Al-Mazzeh",
        price: "12,000,000 SYP",
        maxGuests: "350 guests"
    };
    
    const details = getHallDetails(sampleHall);
    
    expect(details.location).toBe("Damascus - Al-Mazzeh");
    expect(details.price).toBe("12,000,000 SYP");
    expect(details.maxGuests).toBe("350 guests");
});