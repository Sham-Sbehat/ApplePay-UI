import { Stack } from "@mui/material";
import { Person, Home, Bento } from "@mui/icons-material";
import PaymentSection from "./PaymentSection";
import PaymentItem from "./PaymentItem";
import PaymentMethod from "./PaymentMethod";
import ApplePaySummaryCard from "./ApplePaySummaryCard";

const PaymentLayout: React.FC = () => {
  const detailItems = [
    {
      content: (
        <PaymentItem
          title="Apple Card"
          subtitle1="10880 Malibu Point Malibu Cal..."
          subtitle2="•••• 1234"
          icon="/AppleCard.png"
          mode="light"
        />
      ),
      caption: "Light / Contact",
    },
    {
      content: (
        <PaymentItem
          title="Contact"
          subtitle1="astark@starkindustries.com"
          subtitle2="(123) 456-7890"
          icon={<Person />}
          mode="light"
        />
      ),
      caption: "Light / Shipping",
    },
    {
      content: (
        <PaymentItem
          title="Shipping"
          subtitle1="Anthony Stark"
          subtitle2="10880 Malibu Point"
          subtitle3="Malibu CA 90263"
          icon={<Home />}
          mode="light"
        />
      ),
      caption: "Light / Shipping",
    },
    {
      content: (
        <PaymentItem
          title="Shipping"
          subtitle1="Arrives 5-7 days"
          price="$0.00"
          icon={<Bento />}
          mode="light"
        />
      ),
      caption: "Light / Shipping Method",
    },
    {
      content: (
        <PaymentItem
          title="Apple Card"
          subtitle1="10880 Malibu Point Malibu Cal..."
          subtitle2="•••• 1234"
          icon="/AppleCard.png"
          mode="dark"
        />
      ),
      caption: "Dark / Contact",
    },
    {
      content: (
        <PaymentItem
          title="Contact"
          subtitle1="astark@starkindustries.com"
          subtitle2="(123) 456-7890"
          icon={<Person />}
          mode="dark"
        />
      ),
      caption: "Dark / Shipping",
    },
    {
      content: (
        <PaymentItem
          title="Shipping"
          subtitle1="Anthony Stark"
          subtitle2="10880 Malibu Point"
          subtitle3="Malibu CA 90263"
          icon={<Home />}
          mode="dark"
        />
      ),
      caption: "Dark / Shipping",
    },
  ];

  const methodItems = [
    {
      content: (
        <PaymentMethod
          icon="/Button.svg"
          text="Confirm with Side Button"
          showDivider={true}
          mode="light"
        />
      ),
      caption: "Light / FaceID",
    },
    {
      content: (
        <PaymentMethod
          icon="/FingerPrint.svg"
          text="Pay with TouchID"
          showDivider={false}
          mode="light"
        />
      ),
      caption: "Light / TouchID",
    },
    {
      content: (
        <PaymentMethod
          icon="/Button.svg"
          text="Confirm with Side Button"
          showDivider={true}
          mode="dark"
        />
      ),
      caption: "Dark / FaceID",
    },
    {
      content: (
        <PaymentMethod
          icon="/FingerPrint.svg"
          text="Pay with TouchID"
          showDivider={false}
          mode="dark"
        />
      ),
      caption: "Dark / TouchID",
    },
  ];

  // Summary items for light mode
  const summaryItemsLight = [
    <PaymentItem
      key="light-applecard"
      title="Apple Card"
      subtitle1="10880 Malibu Point Malibu Cal..."
      subtitle2="•••• 1234"
      icon="/AppleCard.png"
      mode="light"
      isSummaryItem={true}
    />,
    <PaymentItem
      key="light-contact"
      title="Contact"
      subtitle1="astark@starkindustries.com"
      subtitle2="(123) 456-7890"
      icon={<Person />}
      mode="light"
      isSummaryItem={true}
    />,
    <PaymentItem
      key="light-shipping"
      title="Shipping"
      subtitle1="Anthony Stark"
      subtitle2="10880 Malibu Point"
      subtitle3="Malibu CA 90263"
      icon={<Home />}
      mode="light"
      isSummaryItem={true}
    />,
    <PaymentItem
      key="light-shipping-method"
      title="Shipping"
      subtitle1="Arrives 5-7 days"
      price="$0.00"
      icon={<Bento />}
      mode="light"
      isSummaryItem={true}
    />,
  ];

  // Summary items for dark mode
  const summaryItemsDark = [
    <PaymentItem
      key="dark-applecard"
      title="Apple Card"
      subtitle1="10880 Malibu Point Malibu Cal..."
      subtitle2="•••• 1234"
      icon="/AppleCard.png"
      mode="dark"
      isSummaryItem={true}
    />,
    <PaymentItem
      key="dark-contact"
      title="Contact"
      subtitle1="astark@starkindustries.com"
      subtitle2="(123) 456-7890"
      icon={<Person />}
      mode="dark"
      isSummaryItem={true}
    />,
    <PaymentItem
      key="dark-shipping"
      title="Shipping"
      subtitle1="Anthony Stark"
      subtitle2="10880 Malibu Point"
      subtitle3="Malibu CA 90263"
      icon={<Home />}
      mode="dark"
      isSummaryItem={true}
    />,
    <PaymentItem
      key="dark-shipping-method"
      title="Shipping"
      subtitle1="Arrives 5-7 days"
      price="$0.00"
      icon={<Bento />}
      mode="dark"
      isSummaryItem={true}
    />,
  ];

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent="space-between"
      spacing={3}
      mb={8}
    >
      <PaymentSection title="ApplePay-detailCard" items={detailItems} />
      <PaymentSection title="ApplePay-paymentDetails" items={methodItems} />
      <PaymentSection
        title="ApplePay-summarySheet"
        items={[
          { content: <ApplePaySummaryCard mode="light">{summaryItemsLight}</ApplePaySummaryCard>, caption: "" },
          { content: <ApplePaySummaryCard mode="dark">{summaryItemsDark}</ApplePaySummaryCard>, caption: "" },
        ]}
      />
    </Stack>
  );
};

export default PaymentLayout; 