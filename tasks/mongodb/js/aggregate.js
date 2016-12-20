use univer

db.grades.aggregate(
    [{
        $unwind: "$scores"
    }, {
        $match: {
            "scores.type": {
                $ne: "quiz"
            }
        }
    }, {
        $group: {
            _id: {
                "student": "$student_id",
                "class": "$class_id"
            },
            avgStudentClassScores: {
                $avg: "$scores.score"
            }
        }
    }, {
        $group: {
            _id: "$_id.class",
            avgClassScore: {
                $avg: "$avgStudentClassScores"
            }
        }
    }, {
        $sort: {
            avgClassScore: -1
        }
    }, {
        $limit: 1
    }, {
        $project: {
            _id: 0,
            class_id: "$_id",
            avgClassScore: 1
        }
    }]
)