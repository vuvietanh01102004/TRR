function findOptimalScheduleWithTime(times) {
    const n = times.length; // Số lượng chi tiết
    const m = times[0].length; // Số lượng máy

    // Hàm tính thời gian hoàn thành cho một hoán vị
    function calculateCompletionTime(schedule) {
        let completionTimes = new Array(m).fill(0);
        for (let i = 0; i < n; i++) {
            const detail = schedule[i];
            for (let j = 0; j < m; j++) {
                completionTimes[j] += times[detail - 1][j];
            }
        }

        return Math.max(...completionTimes);
    }

    // Tạo ra một hoán vị ban đầu
    const initialSchedule = Array.from({ length: n }, (_, i) => i + 1);

    // Hàm sinh ra tất cả các hoán vị của một mảng
    function generatePermutations(arr) {
        const result = [];

        function permute(arr, start) {
            if (start === arr.length - 1) {
                result.push([...arr]);
                return;
            }

            for (let i = start; i < arr.length; i++) {
                [arr[start], arr[i]] = [arr[i], arr[start]];
                permute(arr, start + 1);
                [arr[start], arr[i]] = [arr[i], arr[start]]; // Hoán đổi lại để duyệt tiếp
            }
        }

        permute(arr, 0);
        return result;
    }

    // Tìm lịch trình tối ưu
    let optimalSchedule = initialSchedule;
    let minCompletionTime = calculateCompletionTime(initialSchedule);

    const allPermutations = generatePermutations(initialSchedule);
    for (const schedule of allPermutations) {
        const completionTime = calculateCompletionTime(schedule);
        if (completionTime < minCompletionTime) {
            minCompletionTime = completionTime;
            optimalSchedule = schedule;
        }
    }

    console.log("Lịch trình tối ưu:", optimalSchedule);
    console.log("Thời gian hoàn thành tối ưu:", minCompletionTime);
}

// Ví dụ về thời gian gia công (đổi thời gian gia công tij theo yêu cầu của bạn)
const processingTimes = [
    [2, 5, 8],
    [4, 1, 6],
    [7, 3, 2]
];

findOptimalScheduleWithTime(processingTimes);
