const getBallots = async () => {
    const response = await fetch('http://localhost:3000/api/ballots');
    return response.json();
}

export {
    getBallots,
}
