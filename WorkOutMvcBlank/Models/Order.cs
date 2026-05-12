// 訂單主檔
namespace WorkOutMvcBlank.Models
{
    public class Order
    {
        public int Id { get; set; }

        public string OrderNumber { get; set; } = string.Empty;

        public string RecipientName { get; set; } = string.Empty;

        public string RecipientPhone { get; set; } = string.Empty;

        public string RecipientEmail { get; set; } = string.Empty;

        public string RecipientAddress { get; set; } = string.Empty;

        public int Subtotal { get; set; }

        public int Shipping { get; set; }

        public int MemberDiscount { get; set; }

        public int CouponDiscount { get; set; }

        public int Total { get; set; }

        public string Status { get; set; } = "待處理";
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public List<OrderItem> Items { get; set; } = new();
    }
}
