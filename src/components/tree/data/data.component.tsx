export interface TreeNode {
  name: string;
  establishmentDate: string;
  children?: this[];
}

export const companyTree: TreeNode = {
  name: "Top Conglomerate",
  establishmentDate: "1990-01-15",
  children: [
    {
      name: "Technology Holdings",
      establishmentDate: "2005-07-22",
      children: [
        { name: "Innovate Corp", establishmentDate: "2006-04-10" },
        { name: "Digital Solutions Ltd", establishmentDate: "2007-12-05" },
        { name: "CyberSec Systems Inc", establishmentDate: "2008-09-18" },
      ],
    },
    {
      name: "Retail Group",
      establishmentDate: "1995-11-30",
      children: [
        {
          name: "Fashion Retail",
          establishmentDate: "1996-02-14",
          children: [
            { name: "Chic Boutique Inc", establishmentDate: "1997-08-21" },
            { name: "Style Emporium Ltd", establishmentDate: "1997-12-10" },
          ],
        },
        {
          name: "Electronics Retail",
          establishmentDate: "1998-06-25",
          children: [
            { name: "Gadget World Inc", establishmentDate: "1999-03-17" },
            { name: "Tech Mart Ltd", establishmentDate: "1999-05-28" },
          ],
        },
      ],
    },
    {
      name: "Financial Services",
      establishmentDate: "2000-03-02",
      children: [
        {
          name: "Banking Division",
          establishmentDate: "2001-09-14",
          children: [
            { name: "Metro Bank Inc", establishmentDate: "2002-05-03" },
            { name: "Investa Finance Ltd", establishmentDate: "2002-07-19" },
          ],
        },
        {
          name: "Insurance Group",
          establishmentDate: "2003-12-11",
          children: [
            {
              name: "SecureShield Insurance Inc",
              establishmentDate: "2004-02-29",
            },
            { name: "LifeCare Assurance Ltd", establishmentDate: "2004-04-15" },
          ],
        },
        {
          name: "Investment Management",
          establishmentDate: "2006-10-08",
          children: [
            {
              name: "ProfitGuard Investments Inc",
              establishmentDate: "2007-03-26",
            },
            { name: "WealthFund Ltd", establishmentDate: "2007-06-09" },
          ],
        },
      ],
    },
  ],
};
