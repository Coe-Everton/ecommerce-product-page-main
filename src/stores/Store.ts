import { create } from "zustand";

type StoreType = {
    OutlineImageClass: string;
    ViewCarousel: boolean;
    CartOpen: boolean;
    SideBarVisibility: boolean;
    ImagePaths: string[];
    SneakerPrince: number;
    SneakerCount: number;
    CartProducts: {
        SneakersAmount:number;
        AccountTotal:number;
    };
    ImageSelect: number;
    IncrementSneakerCount: () => void;
    DecrementSneakerCount: () => void;
    AddInTheCart: () => void;
    ClearCart: () => void;
    ChangePhoto: (numberSelect:number) => void;
    ToggleCart: () => void,
    ToggleSideBarVisibility: () => void;
    SetViewCarousel:(value:boolean) => void;
    NextViewPhoto: () => void;
    BackViewPhoto: () => void;
};

export const useStore = create<StoreType>((set) => ({
    OutlineImageClass: "outline-4 outline-Orange",
    ViewCarousel:false,
    CartOpen: false,
    SideBarVisibility: false,
    ImagePaths: [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
    ],
    SneakerPrince: 125.00,
    SneakerCount: 0,
    ImageSelect: 1,
    CartProducts: {
        SneakersAmount: 0,
        AccountTotal: 0,
    },
    IncrementSneakerCount: () => set((state) => ({SneakerCount: state.SneakerCount + 1})),

    DecrementSneakerCount: () => set((state) => (
        state.SneakerCount >= 1 
            ? 
                {SneakerCount: state.SneakerCount - 1} 
            : 
                {SneakerCount: state.SneakerCount}
    )),

    AddInTheCart: () => set((state) => {
        if(state.SneakerCount === 0) return {};

        const NewSneakersAmount = state.SneakerCount + state.CartProducts.SneakersAmount;

        return {
            CartProducts:{
                ...state.CartProducts,
                SneakersAmount: NewSneakersAmount,
                AccountTotal: NewSneakersAmount * state.SneakerPrince, 
            },
            SneakerCount: 0
        }
    }),

    ClearCart: () => set(() => {
        return{
            CartProducts: {
                SneakersAmount: 0,
                AccountTotal:0,
            }
        }
    }),

    ChangePhoto: (numberSelect) => set(() => {
        return{
            ImageSelect: numberSelect
        }
    }),

    ToggleCart: () => set((state) => {
      if(state.SideBarVisibility){
        return{};
      }

      if(state.CartOpen && state.CartProducts.AccountTotal === 0){
        return {
          CartOpen: false
        }
      }

      if(state.CartProducts.SneakersAmount === 0){
        return{};
      }

      return {
          CartOpen: !state.CartOpen
      }
    }),

    ToggleSideBarVisibility: () => set((state) => {
      if(state.CartOpen){
        return{
          CartOpen: false,
          SideBarVisibility: !state.SideBarVisibility
        }
      }
      return{
          SideBarVisibility: !state.SideBarVisibility
      }
    }),

    SetViewCarousel: (value:boolean) => set({ ViewCarousel: value }),
    
    NextViewPhoto: () => set((state) => {
      if (state.ImageSelect < state.ImagePaths.length) {
        return {
          ImageSelect: state.ImageSelect + 1
        };
      }
      return state;
    }),

    BackViewPhoto: () => set((state) => {
      if (state.ImageSelect > 1) {
        return {
          ImageSelect: state.ImageSelect - 1
        };
      }
      return state;
    }),
}));