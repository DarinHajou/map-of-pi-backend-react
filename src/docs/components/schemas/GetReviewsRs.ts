import { RatingScale } from "../../../models/enums/ratingScale";

export const GetReviewsRs = {
  type: "array",
  items: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        example: "6674ecee2ac4de0d31e8c048",
      },
      review_id: {
        type: "string",
        example: "test_review_id_6674ecee2ac4de0d31e8c048",
      },
      review_receiver_id: {
        type: "string",
        example: "test_review_receiver_id",
      },
      review_giver_id: {
        type: "string",
        example: "test_review_giver_id",
      },
      reply_to_review_id: {
        type: "string",
        example: "test_reply_to_review_id",
      },
      rating: {
        type: "number",
        enum: Object.values(RatingScale),
        example: RatingScale.DELIGHT,
      },
      comment: {
        type: "string",
        example: "test comment",
      },
      image: {
        type: "string",
        example: "http://example.com/image.jpg",
      },
      review_date: {
        type: "string",
        format: "date-time",
        example: "2024-06-20T00:00:00.000Z",
      },
      __v: {
        type: "number",
        example: 0,
      },
    },
    required: [
      "_id",
      "review_id",
      "review_receiver_id",
      "review_giver_id",
      "reply_to_review_id",
      "rating",
      "review_date",
      "__v",
    ],
  },
};
