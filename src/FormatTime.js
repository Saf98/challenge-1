function FormatTime(num) {
    const sixtyMinInHour = 60;
    const hours = (num / sixtyMinInHour);
    const roundedHours = Math.floor(hours);
    const minutes = (hours - roundedHours) * 60;
    const roundedMinutes = Math.round(minutes);

    if (roundedHours === 0) {
        return `${roundedMinutes}m`
    } else {
        return `${roundedHours}hr ${roundedMinutes}m`;
    }
}

module.exports = FormatTime;