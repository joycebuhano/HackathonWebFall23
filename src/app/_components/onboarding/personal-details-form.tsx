"use client";

import { cn } from "@/app/_lib/client-utils";
import { PersonalDetailsFormSchema, type TPersonalDetailsForm } from "@/app/_lib/zod-schemas/forms/onboarding/personal-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Icons } from "../ui/icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type OnboardingPersonalDetailsFormProps = React.HTMLAttributes<HTMLDivElement>;

export default function OnboardingPersonalDetailsForm({ className, ...props }: OnboardingPersonalDetailsFormProps) {
  // Form Definition
  const form = useForm<TPersonalDetailsForm>({
    resolver: zodResolver(PersonalDetailsFormSchema),
  });

  function onSubmit(values: TPersonalDetailsForm) {
    console.log(values.user_display_name);
    console.log(values.user_school_year);
    console.log(values.user_major);
  }

  return (
    <div className={cn("grid-gap-6", className)} {...props}>
      <Form {...form}>
        <form
          id="onboardingPersonalDetailsForm"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="user_display_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display Name</FormLabel>
                <FormControl>
                  <Input
                    className="border-muted-foreground"
                    placeholder="CoolHacker123"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name. Please be appropriate.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
}

// const router = useRouter();


// classYear.forEach((year) =>
//   classYearSelects.push(
//     <SelectItem value={year.toLowerCase().replace(" ", "_")}>
//       {year}
//     </SelectItem>,
//   ),
// );

// return (
//   <div className="mt-[25vh] flex flex-col items-center">
//     <div className={cn("w-[23rem]")}>
//       <FormStep step="1" />
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <p className="text-2xl font-bold tracking-tight text-center ">
//             Tell Us About Yourself
//           </p>

//           <FormField
//             control={form.control}
//             name="user_class_year"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Class Year</FormLabel>
//                 <FormControl>
//                   <SelectContainer
//                     onValueChange={field.onChange}
//                     defaultValue={field.value ?? ""}
//                   >
//                     <SelectTrigger className="w-full">
//                       <SelectValue
//                         placeholder="Class Year"
//                         className="text-muted-foreground"
//                       />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {classYear.map((year, i) => (
//                         <SelectItem
//                           key={"select-" + i}
//                           value={year.toLowerCase().replaceAll(" ", "_")}
//                         >
//                           {year}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </SelectContainer>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="user_major"
//             render={({ field }) => (
//               <FormItem className="flex flex-col">
//                 <FormLabel>Major</FormLabel>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         className={cn(
//                           "w-0 min-w-full justify-between",
//                           !field.value && "text-muted-foreground",
//                         )}
//                       >
//                         <p className="overflow-hidden text-ellipsis whitespace-nowrap">
//                           {field.value
//                             ? items.find((item) => item.value === field.value)
//                               ?.label
//                             : "Select major"}
//                         </p>

//                         <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent align="start" className="w-[23rem] p-0">
//                     <Command>
//                       <CommandInput placeholder="Search major..." />
//                       <ScrollArea className="h-[14rem] w-full rounded-md border">
//                         <CommandEmpty>No major found.</CommandEmpty>
//                         <CommandGroup>
//                           {items.map((item) => (
//                             <CommandItem
//                               value={item.value}
//                               key={item.value}
//                               onSelect={() => {
//                                 form.setValue("user_major", item.value);
//                               }}
//                             >
//                               <Check
//                                 className={cn(
//                                   "mr-2 h-4 w-4",
//                                   item.value === field.value
//                                     ? "opacity-100"
//                                     : "opacity-0",
//                                 )}
//                               />
//                               {item.label}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </ScrollArea>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div className="grid w-full grid-cols-2 gap-4 ">
//             <Link
//               className={cn(
//                 `w-full ${buttonVariants({ variant: "default" })}`,
//               )}
//               href="/"
//             >
//               Back
//             </Link>

//             <Button
//               type="submit"
//               className="w-full "
//               disabled={form.formState.isSubmitting}
//             >
//               {form.formState.isSubmitting && (
//                 <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
//               )}
//               Next
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   </div>
