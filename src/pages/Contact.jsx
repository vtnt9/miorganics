import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    form.reset();
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">Contact Us</h1>
      <p className="mb-4 text-gray-300">Have a question or want to discuss a project? Get in touch with us using the form below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-dark-800 text-white">
          <CardHeader>
            <CardTitle className="text-orange-400">Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-dark-700 text-white border-dark-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your email" {...field} className="bg-dark-700 text-white border-dark-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} className="bg-dark-700 text-white border-dark-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">Send Message</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="bg-dark-800 text-white">
          <CardHeader>
            <CardTitle className="text-orange-400">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="text-orange-400" />
              <p className="text-gray-300">official@miorganics.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-orange-400" />
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-orange-400" />
              <p className="text-gray-300">123 Tech Street, Silicon Valley, CA 94000</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Connect with us</h2>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;