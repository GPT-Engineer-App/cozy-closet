import React, { useState } from "react";
import { Box, Button, Flex, Grid, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Summer T-Shirt",
    description: "Perfect for the summer days",
    price: 19.99,
    category: "T-Shirts",
    imageUrl: 'https://images.unsplash.com/photo-1516908205727-40afad9449a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjB0LXNoaXJ0fGVufDB8fHx8MTcxNDE5OTgzM3ww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    title: "Winter Jacket",
    description: "Keep warm during winter",
    price: 99.99,
    category: "Jackets",
    imageUrl: 'https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBqYWNrZXR8ZW58MHx8fHwxNzE0MTk5ODMzfDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    title: "Baseball Cap",
    description: "Stylish and cool",
    price: 12.99,
    category: "Accessories",
    imageUrl: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGNhcHxlbnwwfHx8fDE3MTQxOTk4MzR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  // Add more products as needed
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) => (selectedCategory === "All" ? true : product.category === selectedCategory));

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" mb={5}>
        <Text fontSize="2xl" fontWeight="bold">
          Clothing Store
        </Text>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
          Cart ({cart.length})
        </Button>
      </Flex>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab onClick={() => setSelectedCategory("All")}>All</Tab>
          <Tab onClick={() => setSelectedCategory("T-Shirts")}>T-Shirts</Tab>
          <Tab onClick={() => setSelectedCategory("Jackets")}>Jackets</Tab>
          <Tab onClick={() => setSelectedCategory("Accessories")}>Accessories</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {filteredProducts.map((product) => (
                <VStack key={product.id} p={4} borderWidth="1px" borderRadius="lg">
                  <Image src={product.imageUrl} boxSize="150px" objectFit="cover" />
                  <Text fontWeight="bold">{product.title}</Text>
                  <Text>{product.description}</Text>
                  <Text>${product.price.toFixed(2)}</Text>
                  <Button colorScheme="blue" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </VStack>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;
